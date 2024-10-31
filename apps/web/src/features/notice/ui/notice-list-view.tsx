'use client';
import { useCallback } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ui/components/ui/table';
import { Form, FormField, FormItem } from '@ui/components/ui/form';
import { Input } from '@ui/components/ui/input';
import { Button } from '@ui/components/ui/button';
import { useQueryNoticeList } from '@web/features/notice/hooks/use-query-notice';
import { useLayoutActiveEffect } from '@web/features/layout/hook/use-layout-active-effect';
import { JustifyPanel } from '@web/widgets/panel/justify-panel';
import { ListPagination } from '@web/widgets/pagination/list-pagination';
import { useSearchQuery } from '@web/shared/hook/use-search-query';
import { useQueryGeneralShowState } from '@web/shared/hook/use-query-general-show-state';

interface SearchFormSchema {
  page: number;
  size: number;
  searchText: string;
}

export function NoticeListView() {
  console.log('NoticeListView');
  useLayoutActiveEffect('notice');

  const { searchParams, updateQuery } = useSearchQuery<SearchFormSchema>();

  const getRouteQueries = useCallback(() => {
    const page = Number(searchParams.get('page')) || 1;
    const size = Number(searchParams.get('size')) || 10;
    const searchText = searchParams.get('searchText') || '';
    return { page, size, searchText };
  }, [searchParams]);

  const formMethods = useForm<SearchFormSchema>({
    defaultValues: { ...getRouteQueries() },
  });

  const formValues = formMethods.getValues();

  const {
    isFetching,
    isPending,
    isError,
    data: queryData,
  } = useQueryNoticeList({ ...formValues });
  const { list: noticeList = [], total: noticeTotal = 0 } = queryData || {};

  const showState = useQueryGeneralShowState({
    isFetching,
    isPending,
    isError,
    list: noticeList,
  });

  const handlePaging = (page: number) => {
    console.log('handlePaging', page);
    formMethods.setValue('page', page);
    submit();
  };

  const handleSearchClear = (evt: React.SyntheticEvent) => {
    console.log('handleSearchClear');
    evt.preventDefault();
    formMethods.setValue('searchText', '');
    formMethods.setValue('page', 1);
    submit();
  };

  const onSubmit = (payload: SearchFormSchema) => {
    console.log('onSubmit', payload);
    formMethods.setValue('page', 1);
    submit();
  };

  const submit = () => {
    updateQuery(formMethods.getValues());
  };

  return (
    <div>
      {/* <div>{JSON.stringify(formMethods.getValues())}</div> */}
      {/* <div>{JSON.stringify(showState)}</div> */}

      <Form {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <div className="ui-flex ui-items-center">
            <FormField
              control={formMethods.control}
              name="searchText"
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="검색어" {...field} />
                </FormItem>
              )}
            />

            <div className="ui-ml-1">
              <Button type="submit" variant="outline">
                검색
              </Button>
            </div>

            {Boolean(formValues.searchText) && (
              <div className="ui-ml-1">
                <Button type="button" onClick={handleSearchClear}>
                  clear
                </Button>
              </div>
            )}

            {Boolean(showState.showLoadingIndicate) && (
              <div className="ui-ml-1">indicate loading: 목록이 있을때</div>
            )}
          </div>
        </form>
      </Form>

      {Boolean(showState.showLoadingList) && (
        <div>skeleton loading: 목록이 비어있을때</div>
      )}

      {/* {Boolean(showState.showEmpty) && <div>empty</div>} */}

      {/* {Boolean(showState.showError) && <div>error</div>} */}

      {Boolean(showState.showList) && (
        <Table className="ui-mt-2">
          <TableHeader>
            <TableRow>
              <TableHead className="ui-w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="ui-text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {noticeList.map((model) => {
              return (
                <TableRow key={model.id}>
                  <TableCell className="ui-font-medium">{model.id}</TableCell>
                  <TableCell>
                    <Link href={`/notice/detail/${model.id}`}>
                      {model.title}
                    </Link>
                  </TableCell>
                  <TableCell className="ui-text-right">
                    {model.dateYmd}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}

      <JustifyPanel
        bside={
          <Button asChild>
            <Link prefetch={false} href="/notice/create">
              글쓰기
            </Link>
          </Button>
        }
      >
        <ListPagination
          page={formValues.page}
          size={formValues.size}
          total={noticeTotal}
          range={5}
          toHref={({ paging }) => `/notice/list?page=${paging}`}
          onPaging={handlePaging}
          onPagingPrev={handlePaging}
          onPagingNext={handlePaging}
        />
      </JustifyPanel>
    </div>
  );
}
