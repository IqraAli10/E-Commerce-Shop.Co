import { groq } from "next-sanity";

export const FourProducts= groq`*[_type == "products"][0..3]`;
export const EightProducts= groq`*[_type == "products"][0..7]`;
export const AllProducts= groq`*[_type == "products"]`;
export const OneProduct = groq`*[_type == "products" && _id == $id][0]`;
