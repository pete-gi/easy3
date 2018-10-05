<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Pages - Manage - {{page.title}}
            </p>
            <a to="/admin/pages/add" class="card-header-icon" @click.prevent="remove">
                <span class="icon">
                    <i class="fa fa-minus"></i>
                </span>
                Remove
            </a>
        </header>
        <div class="card-content">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: {}
        }
    },
    computed: {
        base() {
            return this.$store.state.settings.base;
        },
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
        getPage() {
            this.$http.post(`${this.base}/admin/pages/get`, {id: this.id}, {emulateJSON: true}).then(res => {
                this.page = res.body;
            }).catch(err => {
                console.error('Couldn\'t get page');
            });
        },
        remove() {
            this.$http.post(`${this.base}/admin/pages/remove`, {id: this.id}, {emulateJSON: true}).then(res => {
                this.$router.push({name: 'pages'});
            }).catch(err => {
                console.error(err);
            })
        }
    },
    mounted() {
        this.getPage();
    }
}
</script>
