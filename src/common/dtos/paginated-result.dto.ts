import { ApiProperty } from '@nestjs/swagger';
import { PaginatedMetaDTO } from '~/common/dtos';

export class PaginatedResultDTO {
  @ApiProperty({
    example: {
      count: 15,
      page: 1,
      pageSize: 10,
      pageCount: 2,
      pageNumberIsGood: true,
      hasPreviousPage: true,
      hasNextPage: false,
      isFirstPage: false,
      isLastPage: true,
      numberOfFirstItemOnPage: 10,
      firstItemOnPage: 10,
      numberOfLastItemOnPage: 14,
      lastItemOnPage: 14
    }
  })
  meta: PaginatedMetaDTO;

  constructor(rows: any[], count: number, page: number, pageSize: number) {
    const pageCount = count > 0 ? Math.ceil(parseFloat(`${count}`) / parseFloat(`${pageSize}`)) : 0;
    const pageNumberIsGood = pageCount > 0 && page <= pageCount && page >= 0;
    const hasPreviousPage = pageNumberIsGood && page > 0;
    const hasNextPage = pageNumberIsGood && page + 1 < pageCount;
    const isFirstPage = pageNumberIsGood && page === 0;
    const isLastPage = pageNumberIsGood && page + 1 === pageCount;
    const numberOfFirstItemOnPage = pageNumberIsGood ? page * pageSize : 0;
    const firstItemOnPage = pageNumberIsGood ? numberOfFirstItemOnPage : 0;
    const numberOfLastItemOnPage = pageNumberIsGood ? numberOfFirstItemOnPage + rows.length - 1 : 0;
    const lastItemOnPage = pageNumberIsGood ? count - 1 : 0;

    this.meta = {
      count,
      page,
      pageSize,
      pageCount,
      pageNumberIsGood,
      hasPreviousPage,
      hasNextPage,
      isFirstPage,
      isLastPage,
      numberOfFirstItemOnPage,
      firstItemOnPage,
      numberOfLastItemOnPage,
      lastItemOnPage
    };
  }
}
