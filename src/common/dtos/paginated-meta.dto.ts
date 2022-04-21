import { ApiProperty } from '@nestjs/swagger';

export class PaginatedMetaDTO {
  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  pageSize: number;

  @ApiProperty({ example: 15 })
  count: number;

  @ApiProperty({ example: 2 })
  pageCount?: number;

  @ApiProperty({ example: true })
  pageNumberIsGood?: boolean;

  @ApiProperty({ example: true })
  hasPreviousPage?: boolean;

  @ApiProperty({ example: false })
  hasNextPage?: boolean;

  @ApiProperty({ example: false })
  isFirstPage?: boolean;

  @ApiProperty({ example: false })
  isLastPage?: boolean;

  @ApiProperty({ example: 10 })
  numberOfFirstItemOnPage?: number;

  @ApiProperty({ example: 10 })
  firstItemOnPage?: number;

  @ApiProperty({ example: 14 })
  numberOfLastItemOnPage?: number;

  @ApiProperty({ example: 14 })
  lastItemOnPage?: number;
}
