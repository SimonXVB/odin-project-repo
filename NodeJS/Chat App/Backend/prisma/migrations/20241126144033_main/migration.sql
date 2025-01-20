/*
  Warnings:

  - You are about to drop the column `userId` on the `Chat` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_userId_fkey";

-- AlterTable
CREATE SEQUENCE chat_id_seq;
ALTER TABLE "Chat" DROP COLUMN "userId",
ALTER COLUMN "id" SET DEFAULT nextval('chat_id_seq');
ALTER SEQUENCE chat_id_seq OWNED BY "Chat"."id";

-- AlterTable
CREATE SEQUENCE message_id_seq;
ALTER TABLE "Message" ALTER COLUMN "id" SET DEFAULT nextval('message_id_seq');
ALTER SEQUENCE message_id_seq OWNED BY "Message"."id";
