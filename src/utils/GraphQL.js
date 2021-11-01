import axios from 'axios'


function getStuff(){

// Define constant
// Endpoint URL
const githubUrl = 'https://api.github.com/graphql'
// Your personal access token
const token = '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'
// The Authorization in the header of the request
const oauth = {Authorization: 'bearer ' + token}
// The GraphQL query, a string
const query = `{
                    viewer {
                        login
                        pinnedItems(last: 10) {
                            edges {
                                node {
                                    __typename
                                    ... on Repository {
                                        id
                                        name
                                        description
                                        projectsUrl
                                        object {
                                            id
                                        }
                                        openGraphImageUrl
                                        url
                                    }
                                }
                            }
                        }
                    }
                }`


    // Post request, axios.post() return a Promise
    return axios.post(githubUrl, {query: query}, {headers: oauth})
 
}

export default getStuff
