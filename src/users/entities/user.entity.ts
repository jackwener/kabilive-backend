import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document


@Schema()
export class User {
    @Prop()
    _id: String
    @Prop({required:true})
    name: String
    @Prop({required:true})
    password?: String
    @Prop()
    email: String
    @Prop()
    description: String
    @Prop()
    avatarUrl: String
}

export const UserSchema = SchemaFactory.createForClass(User);
