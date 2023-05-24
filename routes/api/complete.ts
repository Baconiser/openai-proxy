
import { Handlers } from "$fresh/server.ts";
import {  OpenAI  } from "https://deno.land/x/openai/mod.ts";




export const handler: Handlers = {
    async GET(req, ctx) {
        return new Response("POST apiKey, model, prompt, temperature, max_tokens. this is just an proxy");
    },
    async POST(req, ctx) {
        const body = await req.json();

        const { apiKey, model, prompt, temperature, max_tokens } = body;

        const openai = new OpenAI (apiKey);
        const completion = await openai.createCompletion({
            model,
            prompt,
            temperature,
            max_tokens
        });


        let response = new Response(JSON.stringify(completion), {
            headers: {
                "content-type": "application/json",
            }
        });
        return response;
    },
};
