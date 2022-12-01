import { createClient } from 'microcms-js-sdk'


export const client = createClient(
    {
        serviceDomain: 'codeeveryday',
        apiKey: process.env.API_KEY
    }
)



