import { computed } from 'vue'
import { collection } from "firebase/firestore";
import { useFirestore, useCollection } from 'vuefire'

export default function usePropiedades() {

    const db = useFirestore()
    const propiedadesCollection = useCollection(collection(db, 'propiedades'))

    const prieceProperty = computed(() => {
        return (priece) => 
            Number(priece).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            })
        
    })
    return{
        propiedadesCollection,
        prieceProperty
    }
}