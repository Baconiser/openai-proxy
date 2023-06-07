
import { Handlers } from "$fresh/server.ts";
import {  OpenAI  } from "https://deno.land/x/openai/mod.ts";




export const handler: Handlers = {
    async GET(req, ctx) {
        return new Response("POST https://deno.land/x/openai@1.4.0/mod.ts?s=ChatCompletionOptions. this is just an proxy");
    },
    async POST(req, ctx) {
        const body = await req.json();

        const { apiKey, model,
            messages,
            content,
            temperature,
            topP,
            n,
            stop,
            maxTokens,
            presencePenalty,
            frequencyPenalty,
            user,
        } = body;
        const openai = new OpenAI (apiKey);
        const completion = await openai.createChatCompletion({
            model,
            model,
            messages,
            content,
            temperature,
            topP,
            n,
            stop,
            maxTokens,
            presencePenalty,
            frequencyPenalty,
            user,

        });

        let response = new Response(JSON.stringify(completion), {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
            }
        });
        return response;
    },
};
