import {  ref } from 'vue'



export default function useLocationMap() {

    const zoom = ref (15)
    const center = ref([40.400301, -3.716277])

    function pin(e) {
        const market = e.target.getLatLng()
        center.value = [market.lat, market.lng]
    }
    return{
        zoom,
        center, 
        pin
    }
}