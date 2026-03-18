import FortuneDetail from '@/components/fortune-detail'

interface Props {
  params: Promise<{ id: string }>
}

export default async function FortunePage({ params }: Props) {
  const { id } = await params
  return <FortuneDetail id={id} />
}
