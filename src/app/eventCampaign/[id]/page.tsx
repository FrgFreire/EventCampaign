import styles from '../EventCampaign.module.css';

async function getEventCampaign(eventCampaignId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/GetEventCampaign/records/${eventCampaignId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function EventCampaign({ params }: any) {
  const eventCampaign = await getEventCampaign(params.id);

  return (
    <div>
      <h1>{eventCampaign.Title}</h1>
      <div className={styles.note}>
        <h2>{eventCampaign.Name}</h2>
        <h3>{eventCampaign.EffectiveDate}</h3>
        <h5>{eventCampaign.Description}</h5>
      </div>
    </div>
  );
}