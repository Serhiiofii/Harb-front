<template>
    <div class="mt-3">
        <b-table :data="quotes" :paginated="isPaginated" :per-page="perPage" :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple" :pagination-position="paginationPosition"
            :pagination-rounded="isPaginationRounded" aria-next-label="Next page" aria-previous-label="Previous page"
            aria-page-label="Page" aria-current-label="Current page" :pagination-order="paginationOrder"
            :page-input-position="inputPosition" :debounce-page-input="inputDebounce">

            <b-table-column field="user.first_name" label="User" v-slot="props">
                <div class="flex items-center">
                    <img :src="props.row.user.avatar ? props.row.user.avatar : '/icons/user.svg'" class="pr-1" width="30"
                        height="30" alt="A" />
                    {{ props.row.user.first_name }}
                </div>
            </b-table-column>

            <b-table-column field="date" label="Date" centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.created_at).toLocaleDateString() }}
                </span>
            </b-table-column>

            <b-table-column field="status" label="Status" v-slot="props">
                <span class="tag" :class="[props.row.flag == 'ask' ? 'is-warning' : 'is-success']">
                    {{ props.row.flag }}
                </span>
            </b-table-column>

            <b-table-column field="amount" label="Our Quote" v-slot="props">
                {{ props.row.amount }}
            </b-table-column>

            <b-table-column field="action" label="Action" v-slot="props">
                <div class="flex">
                    <b-button @click="openQuoteModal(props.row.id)" type="is-success"
                        class="p-1 h-6 mr-1" size="is-small" title="approve" outlined>
                        <img src="/icons/quote.svg" width="16" height="16" alt="A" />
                    </b-button>
                    <b-button @click="openChat(props.row.user.id)" type="is-primary" class="p-1 h-6 mr-1" size="is-small"
                        title="open chat" outlined>
                        <img src="/icons/chat.png" width="16" height="16" alt="A" />
                    </b-button>
                </div>
            </b-table-column>
        </b-table>
        <BidModal :isCardModalActive="isCardModalActive" :id="quotesId" :toggle="toggleCard" type="quote" :quote="null" />
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: {
        data: Object,
        showQuotes: Boolean
    },
    data() {
        return {
            quotes: [],
            isPaginated: true,
            isPaginationSimple: true,
            isPaginationRounded: false,
            paginationPosition: 'bottom',
            currentPage: 1,
            perPage: 5,
            paginationOrder: '',
            inputPosition: '',
            inputDebounce: '',

            isCardModalActive: false,
            quotesId: ""
        }
    },
    computed: mapState(["token"]),
    methods: {
        getQuotes(equipId, sellerId) {
            this.$axios
                .$get(`seller/quotes/${sellerId}/${equipId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + this.token,
                    },
                })
                .then((response) => {
                    this.quotes = response.data.quotes;
                })
                .catch((error) => {
                    this.$toast.error(error.response.data.message);
                })
        },
        openQuoteModal(qId) {
            this.isCardModalActive = !this.isCardModalActive;
            this.quotesId = qId;
        },
        openChat(uId) {
            this.$toast.warning("This feature will be available soon.");
        },
        toggleCard() {
            this.getQuotes(this.data.id, this.data.seller_id);
            
            this.isCardModalActive = !this.isCardModalActive;
        },
    },
    watch: {
        showQuotes: function () {
            this.getQuotes(this.data.id, this.data.seller_id)
        }
    }
}
</script>