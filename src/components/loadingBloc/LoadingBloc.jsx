import LoadingSkeleton from '@/components/loadingskeleton/LoadingSkeleton';

export default function Loading() {
  return (
    <div className="loading-container">
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton /><LoadingSkeleton />
      <LoadingSkeleton /><LoadingSkeleton />
    </div>
  )
}