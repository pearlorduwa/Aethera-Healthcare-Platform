import axios from "axios";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log(
    "Hugging Face Key Loaded:",
    !!process.env.HUGGINGFACE_API_KEY
);


const app = express();


app.use(cors());
app.use(express.json());


app.post("/chat", async (req, res) => {

    try {

        const { message } = req.body;

        console.log("User asked:", message);


        const response = await axios.post(

            "https://router.huggingface.co/v1/chat/completions",

            {

                model: "Qwen/Qwen3-4B-Instruct-2507",

                messages: [

                    {
                        role: "system",

                        content: `
You are Aethera AI.

You are a friendly healthcare education assistant.

Explain medical topics simply.

Encourage healthy habits.

Never diagnose diseases.

Recommend seeing a healthcare professional for emergencies.
`
                    },


                    {
                        role: "user",

                        content: message
                    }

                ]

            },


            {

                headers: {

                    Authorization:
                    `Bearer ${process.env.HUGGINGFACE_API_KEY}`,

                    "Content-Type": "application/json"

                }

            }

        );


        const reply =
        response.data.choices[0].message.content;


        res.json({

            reply: reply

        });


    } catch(error) {


        console.error("Hugging Face Error:");

        if(error.response){

            console.error(error.response.data);

        } else {

            console.error(error.message);

        }


        res.status(500).json({

            reply:
            "Sorry, something went wrong."

        });


    }

});



app.listen(3000, () => {

    console.log(
        "Server running on http://localhost:3000"
    );

});