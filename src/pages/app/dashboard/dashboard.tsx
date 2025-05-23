import { useDocumentTitle } from '@/hook/title';
import { DayOrdersAmountCard } from './day-orders-amount-card';
import { MonthCanceledOrdersAmountCard } from './canceled-orders-amount-card';
import { MonthOrdersAmountCard } from './month-orders-amount-card';
import { MonthRevenueCard } from './month-revenue-card';

export function Dashboard() {
  useDocumentTitle('Dashboard');
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  );
}
