import { configureStore, createSlice } from '@reduxjs/toolkit'


// Создай действия сохранения и удаления контакта,
// а также обновления фильтра.Используй функцию createAction().

// export const createContact = createAction('contacts.items/createContact')
// export const deleteContact = createAction('contacts.items/deleteContact')
// export const updateFiter = createAction('contacts.filter/updateFiter')

// Создай редюсеры контактов и фильтра.
// Используй функцию createReducer() или createSlice().

// const contactsReducer = createReducer([], {
//     [createContact]: (state, action) => [...state, action.payload],
//     [deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
// })

// const filterReducer = createReducer('', {
//     [updateFiter]: (state, action) => state.filter(contact =>
//       contact.name.toLowerCase().includes(action.payload.toLowerCase()))
// })

// Создай хранилище с configureStore()

// export const store = configureStore({
//     reducer: {
//         contacts: {
//             items: contactsReducer,
//             filter: filterReducer,
//         }
//     },
// });



// const initialState = { value: 0 }

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment(state) {
//       state.value++
//     },
//     decrement(state) {
//       state.value--
//     },
//     incrementByAmount(state, action) {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { items: [], filter: '' },
    reducers: {
        createContact(state, action) {
            console.log(state.items)
            state.items.push(action.payload)
            // [...state.items, action.payload]
        },
        deleteContact(state, action) {
            console.log(action.payload)
            console.log(action)
            console.log(state)
            state.items = state.items.filter(contact => contact.id !== action.payload)
        },
        updateFiter(state, action) {
            state.filter = action.payload
            // state.items.filter(contact =>
            //     contact.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})


// const contactsSlice = createSlice({
//     name: 'items',
//     initialState: [],
//     reducers: {
//         createContact(state, action) {
//             state.push(action.payload)
//         },
//         deleteContact(state, action) {
//             console.log(action.payload)
//             console.log(action)
//             console.log(state)
//             return state.filter(contact => contact.id !== action.payload)
//         }
//     }
// })

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: '',
//     reducers: {
//         updateFiter(state, action) {
//             return state.filter = action.payload
//         }
//     }
// })

// export const store = configureStore({
//  reducer: {
//        contacts: {
//             items: contactsSlice.reducer,
//             filter: filterSlice.reducer,
//         }
//     },
// });

export const store = configureStore({
 reducer: {
        contacts: contactsSlice.reducer
    },
});

console.log(contactsSlice)

export const { createContact, deleteContact, updateFiter } = contactsSlice.actions
// export const { createContact, deleteContact } = contactsSlice.actions
// export const { updateFiter } = filterSlice.actions
// export const {contactsSlice.reducer, filterSlice}
export default contactsSlice.reducer