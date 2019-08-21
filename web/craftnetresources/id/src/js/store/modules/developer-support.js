import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * State
 */
const state = {
    subscriptionInfo: {
        currentPlan: 'pro',
        pro: {
            uid: 1234,
            canceled: false,
            cycleEnd: '2019-09-19',
        },
        premium: {
            uid: 4567,
            canceled: false,
            cycleEnd: '2019-09-19',
            upgradeCost: 412.5,
        },
    },
    selectedPlan: null,
    plans: [
        {
            icon: 'support-plan-basic',
            handle: "basic",
            name: "Basic",
            price: 0,
            features: [
                'Utilize Discord and Stack Exchange',
                'While you can contact the team at CMS directly, there is no guaranteed response time',
            ]
        },
        {
            icon: 'support-plan-pro',
            handle: "pro",
            name: "Pro",
            price: 75,
            features: [
                'Contact the team at Craft CMS directly via email',
                'Guaranteed 12 hour or less time to first response (M-F)',
            ]
        },
        {
            icon: 'support-plan-premium',
            handle: "premium",
            name: "Premium",
            price: 750,
            features: [
                'Contact the team at Craft CMS directly via email',
                'Tickets go to top of queue',
                'Guaranteed 2 hour or less time to first response (M-F), 12 hours on weekends',
            ]
        },
    ]
}

/**
 * Getters
 */
const getters = {
    currentPlan(state) {
        return state.subscriptionInfo.currentPlan
    },

    newSubscriptionInfo(state) {
        if (!state.selectedPlan) {
            return null
        }

        if (!state.subscriptionInfo[state.selectedPlan]) {
            return null
        }

        return state.subscriptionInfo[state.selectedPlan]
    }
}

/**
 * Actions
 */
const actions = {}

/**
 * Mutations
 */
const mutations = {
    updateCurrentPlan(state, planHandle){
        state.subscriptionInfo.currentPlan = planHandle
    },

    updateSelectedPlan(state, planHandle){
        state.selectedPlan = planHandle
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
