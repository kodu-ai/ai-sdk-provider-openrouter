import type { OpenRouterSharedSettings } from "./types";

export type OpenRouterCompletionModelId = string;

export type OpenRouterCompletionSettings = {
  /**
Modify the likelihood of specified tokens appearing in the completion.

Accepts a JSON object that maps tokens (specified by their token ID in
the GPT tokenizer) to an associated bias value from -100 to 100. You
can use this tokenizer tool to convert text to token IDs. Mathematically,
the bias is added to the logits generated by the model prior to sampling.
The exact effect will vary per model, but values between -1 and 1 should
decrease or increase likelihood of selection; values like -100 or 100
should result in a ban or exclusive selection of the relevant token.

As an example, you can pass {"50256": -100} to prevent the <|endoftext|>
token from being generated.
   */
  logitBias?: Record<number, number>;

  /**
Return the log probabilities of the tokens. Including logprobs will increase
the response size and can slow down response times. However, it can
be useful to better understand how the model is behaving.

Setting to true will return the log probabilities of the tokens that
were generated.

Setting to a number will return the log probabilities of the top n
tokens that were generated.
   */
  logprobs?: boolean | number;

  /**
The suffix that comes after a completion of inserted text.
   */
  suffix?: string;
} & OpenRouterSharedSettings;
