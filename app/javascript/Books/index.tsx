import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { withProvider } from '../graphqlProvider'
import { AllBooksQuery } from '../graphql/types'
import { useAllBooksQuery } from '../graphql/types'


const booksQuery = gql`
    query allBooks {
        books {
            title
            id
        }
    }
`

// const data = {
//     books: [
//         {
//         id: '1',
//         title: 'Active Rails',
//         },
//     ],
// }

const loading = false
const Book: React.FunctionComponent = ({title}) => {
    return <li>{title}</li>
}

const Books = () => {
    // const { data, loading, error } = useQuery<AllBooksQuery>(booksQuery)
    const { data, loading, error } = useAllBooksQuery()

    if (loading) {
        return <span>"Loading..."</span>
    }
    return (
        <div>
            <h1>Books</h1>
            <ul>
                {data.books.map((book) => (
                    <Book {...book} key={book.id} />
                ))}
            </ul>
        </div>
    )
}

export default withProvider(Books)