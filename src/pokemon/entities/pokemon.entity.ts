import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

// Representacion de lo que vamos a grabar en BD, TABLA
@Schema()
export class Pokemon extends Document {
    //id: string // mongo me lo da
    @Prop({
        unique: true,
        index: true, 
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);