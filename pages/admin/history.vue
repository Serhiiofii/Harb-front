<template>
    <b-table :data="[]" :paginated="true" :per-page="10" pagination-position="bottom" aria-next-label="Next page"
        aria-previous-label="Previous page" aria-page-label="Page" aria-current-label="Current page">

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
                <b-button @click="" type="is-success" class="p-1 h-6 mr-1" size="is-small"
                    title="approve" outlined>
                    <img src="/icons/quote.svg" width="16" height="16" alt="A" />
                </b-button>
                <b-button @click="" type="is-primary" class="p-1 h-6 mr-1" size="is-small"
                    title="open chat" outlined>
                    <img src="/icons/chat.png" width="16" height="16" alt="A" />
                </b-button>
            </div>
        </b-table-column>
    </b-table>
</template>