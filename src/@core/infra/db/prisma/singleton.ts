import { beforeEach, vitest } from 'vitest';
import { mockDeep, mockReset, DeepMockProxy } from 'vitest-mock-extended';
import prisma from './index';
import { PrismaClient } from '../../../../../generated/client';
vitest.mock('./index', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}));
beforeEach(() => {
  mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
