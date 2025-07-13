
'use server';
/**
 * @fileOverview A flow to generate a hero image for the website.
 *
 * - generateHeroImage - A function that generates a hero image.
 * - GenerateHeroImageOutput - The return type for the generateHeroImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHeroImageOutputSchema = z.object({
  imageUrl: z.string().describe("The data URI of the generated hero image."),
});
export type GenerateHeroImageOutput = z.infer<typeof GenerateHeroImageOutputSchema>;

export async function generateHeroImage(): Promise<GenerateHeroImageOutput> {
  // If there's no API key, return a placeholder to avoid crashing.
  if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
    return {
        imageUrl: `https://placehold.co/1920x1080.png`,
      };
  }
  return generateHeroImageFlow();
}

const generateHeroImageFlow = ai.defineFlow(
  {
    name: 'generateHeroImageFlow',
    inputSchema: z.void(),
    outputSchema: GenerateHeroImageOutputSchema,
  },
  async () => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-pro-vision',
      prompt: 'A diverse group of professionals in a modern, bright office, collaboratively looking at financial charts and graphs on a large digital screen. The image should convey success, growth, and teamwork. The style should be photorealistic with a clean, corporate aesthetic.',
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media.url) {
      throw new Error('Image generation failed.');
    }

    return {
      imageUrl: media.url,
    };
  }
);
