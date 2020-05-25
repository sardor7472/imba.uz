export default {
    state:{
        ads:[
            {
                title: 'Моющие',
                description: 'средства',
                proma: true,
                imagesSrc: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=red-dahlia-flower-60597.jpg&fm=jpg',
                id: '11'
            },
            {
                title: 'fhdkss',
                description: 'dlkdsfllfsdasds',
                proma: false,
                imagesSrc: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-blur-462118.jpg&fm=jpg',
                id: '12'
            },
            {
                title: 'fhdkss',
                description: 'dlkdsfllfsdasds',
                proma: true,
                imagesSrc: 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-blur-462118.jpg&fm=jpg',
                id: '13'
            }
        ]
    },
    mutations:{},
    action:{},
    getters:{
        ads (state) {
            return state.ads;
        },
        promaAds(state){
            return state.ads.filter(ad=>{
                return ad.proma === true
            })
        },
        myAds(state){
            return state.ads;
        }
    }
}