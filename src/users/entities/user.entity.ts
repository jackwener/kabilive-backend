import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document


@Schema()
export class User {
    @Prop()
    _id: String
    @Prop({ required: true })
    name: String
    @Prop()
    description?: String
    // @Prop({ required: true })
    // email: String
}

export const UserSchema = SchemaFactory.createForClass(User);
