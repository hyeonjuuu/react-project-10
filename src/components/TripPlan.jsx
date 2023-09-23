import { Link } from 'react-router-dom';
import TripPlanEditButton from '@/components/TripPlanEditButton';
import { useLocalStore } from '@/store/localStore';
import { useQuery } from '@tanstack/react-query';
import { getPocketHostURL } from '@/utils';
import { useDateStore } from '@/store/dateStore';

const getMySchedule = () =>
  fetch(`${getPocketHostURL('mySchedule')}`).then((res) => res.json());

export default function TripPlan({ background = 'bg-secondary/50' }) {
  const { tripDate } = useDateStore();
  const selectName = useLocalStore((set) => set.selectName);
  const selectDate = useDateStore((set) => set.tripDate);
  const { data } = useQuery(['mySchedule'], getMySchedule);
  console.log(selectDate);
  console.log(selectDate[0]?.toISOString());
  console.log(tripDate);
  const scheduleDate = tripDate?.items?.map(
    (item) => item?.toISOString().split('T')[0]
  );
  console.log(scheduleDate);
  return (
    <div className={`${background} px-6 py-[1.125rem] md:px-10 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">장소</dt>
            <dd className="text-base text-contentsPrimary">{selectName}</dd>
          </dl>
          <Link to="/triplocal">
            <TripPlanEditButton />
          </Link>
        </div>
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">여행 기간</dt>
            <dd className="text-base font-light text-contentsSecondary">
              {selectDate[0]?.toISOString().split('T')[0]} -
              {selectDate[1]?.toISOString().split('T')[0]}
            </dd>
          </dl>
          <Link to="/tripcalendar">
            <TripPlanEditButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
