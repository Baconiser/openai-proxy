
import { Handlers } from "$fresh/server.ts";
import {  OpenAI  } from "https://deno.land/x/openai/mod.ts";




export const handler: Handlers = {
    async GET(req, ctx) {
        return new Response("POST https://deno.land/x/openai@1.4.0/mod.ts?s=CompletionOptions. this is just an proxy");
    },
    async POST(req, ctx) {
        const body = await req.json();

        const { apiKey, model,
            prompt,
            suffix,
            maxTokens,
            temperature,
            topP,
            n,
            logprobs,
            echo,
            stop,
            presencePenalty,
            frequencyPenalty,
            bestOf,
            user } = body;
        const openai = new OpenAI (apiKey);
        const completion = await openai.createCompletion({
            model,
            prompt,
            suffix,
            maxTokens,
            temperature,
            topP,
            n,
            logprobs,
            echo,
            stop,
            presencePenalty,
            frequencyPenalty,
            bestOf,
            user
        });

        console.log(openai.createCompletion)

        let response = new Response(JSON.stringify(completion), {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
            }
        });
        return response;
    },
};
