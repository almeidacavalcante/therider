import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { StudentsRepository } from '@/domain/ride/application/repositories/students-repository'
import { CacheModule } from '../cache/cache.module'

@Module({
  imports: [CacheModule],
  providers: [
    PrismaService,
  ],
  exports: [
    PrismaService,
    StudentsRepository,
  ],
})
export class DatabaseModule {}
