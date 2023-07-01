-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(240) NOT NULL,
    `lastName` VARCHAR(240) NOT NULL,
    `userName` VARCHAR(240) NULL,
    `bio` VARCHAR(191) NULL,
    `password` VARCHAR(100) NOT NULL,
    `salt` VARCHAR(191) NULL,
    `blocked` BOOLEAN NOT NULL DEFAULT true,
    `emailVerified` BOOLEAN NOT NULL DEFAULT false,
    `dob` DATETIME(3) NOT NULL,
    `address` VARCHAR(191) NULL,
    `profile_img` VARCHAR(191) NULL,
    `gcm_id` VARCHAR(191) NULL,
    `platform` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
