<template>
    <div class="bg-gray-50">
        <AdminNav />
        <div class="max-w-screen-2xl mx-auto px-3 flex mt-4 container">
            <AdminSidebar />
            <b-table :data="logdata" class="lg:ml-4 w-full mt-4" :paginated="true" :per-page="10" pagination-position="bottom"
                aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page"
                :pagination-simple="true"
                :narrowed="true"
                aria-current-label="Current page">
                <b-table-column field="user.first_name" label="User" searchable sortable v-slot="props">
                    <div class="flex items-center">
                        {{ props.row.user.first_name }}
                    </div>
                </b-table-column>
                <b-table-column field="user.email" label="Email" searchable sortable v-slot="props">
                    {{ props.row.user.email }}
                </b-table-column>
                <b-table-column field="ip" label="IP Address" searchable sortable v-slot="props">
                    {{ props.row.ip }}
                </b-table-column>
                <b-table-column field="location" label="Location" searchable sortable v-slot="props">
                    {{ props.row.location }}
                </b-table-column>
                <b-table-column field="os" label="OS" sortable v-slot="props">
                    {{ props.row.os }}
                </b-table-column>
                <b-table-column field="browser" label="Browser" sortable v-slot="props">
                    {{ props.row.browser }} {{ props.row.browser_ver }}
                </b-table-column>
                <b-table-column field="timezone" label="Timezone" sortable v-slot="props">
                    {{ props.row.timezone }}
                </b-table-column>
                <b-table-column field="created_at" label="Last Login" searchable sortable centered v-slot="props">
                    {{ new Date(props.row.created_at).toLocaleDateString() }} {{ new
                        Date(props.row.created_at).toLocaleTimeString() }}
                </b-table-column>
            </b-table>
        </div>
        <FooterNav />
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            logdata: []
        }
    },
    computed: mapState(["token"]),
    mounted() {
        this.$axios
            .$get(`admin/users/logs`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + this.token,
                },
            }).then((response) => {
                this.logdata = response.data
            })
    }
}
</script>