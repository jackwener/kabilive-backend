import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LiveDocument = Live & Document


@Schema()
export class Live {
    @Prop()
    _id: String
    @Prop({ required: true })
    name: String
    @Prop({ required: true })
    creator: String
    @Prop()
    description?: String
    @Prop()
    sort?: String
    
    // @Prop()
    // followersIds: String[]
    // @Prop({ required: true })
    // status: boolean

    @Prop()
    url: String
}

export const LiveSchema = SchemaFactory.createForClass(Live);