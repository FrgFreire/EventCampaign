import Link from "next/link";
import styles from './EventCampaign.module.css';

async function getEventCampaigns() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/GetEventCampaigns/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}

export default async function EventCampaignList() {
    const eventCampaignList = await getEventCampaigns();
    return (
        <div>
            <h1>Event Campaigns</h1>
            <div className={styles.grid}>
                {eventCampaignList?.map((eventCampaign) => {
                    return <EventCampaign key={eventCampaign.id} eventCampaign={eventCampaign}/>;
                })}
            </div>
        </div>
    );
}

function EventCampaign({eventCampaign} : any){
    const { id, Title ,EffectiveDate, Type} = eventCampaign || {}

    return <div className={styles.eventCampaign}>
            <Link href={`/eventCampaign/${id}`} >
                <div>
                    <h2>{Title}</h2>
                    <p>{EffectiveDate}</p>
                </div>
            </Link>
            </div>
}