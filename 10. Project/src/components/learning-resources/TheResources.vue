<template>
    <base-card>
        <base-button 
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
        >Stored Resources</base-button>

        <base-button 
        @click="setSelectedTab('add-resource')"
        :mode="addResButtonMode"
        >Add Resource</base-button>
    </base-card>

    <keep-alive>
       <component :is="selectedTab"></component> 
    </keep-alive>

    
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'


export default {
    components: {
        StoredResources,
        AddResource
    },

    data() {
        return {
            selectedTab: 'stored-resources',

            storedResources: [
                {
                    id: 'offical guide',
                    title: 'Official Guide',
                    description: 'vue.js',
                    link: 'https://vuejs.org/',
                },
                {
                    id: 'offical guide',
                    title: 'google',
                    description: 'google',
                    link: 'https://google.com/',
                },
            ]
        }
    },

    provide(){
        return {
            resources: this.storedResources,
            addResources: this.addResources
        }
    },

    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat'
        },
    },

    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },

        addResources(title, description, url) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link:url
            }

            this.storedResources.unshift(newResource)
            this.selectedTab = 'stored-resources'
        }
    }
}
</script>

<style scoped>

</style>