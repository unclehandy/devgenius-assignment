"use client"
import { useEffect } from "react";
import { Chart } from "chart.js";

async function fetchData() {
    const res = await fetch('https://eventmakers-api.fly.dev/events/', {
        cache: "no-cache",
    });

    const data = await res.json();
    return data;
}

export default function Dashboard() {
    useEffect(() => {
        const fetchEventData = async () => {
            const data = await fetchData();
            const events = data.data;

            // Filter events based on author
            const filteredEvents = events.filter(event => {
                return (
                    event.events.author === "ds_v3jTVjbKWukzTUd" ||
                    event.events.author === "ds_MqBbtrypLFQ6X3P" ||
                    event.events.author === "ds_FPFzoy8P0wqCDBl"
                );
            });

            const eventNames = filteredEvents.map(event => event.events.title);
            const participantsCounts = filteredEvents.map(event => event.participants.length);

            const ctx = document.getElementById('myChart').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: eventNames,
                    datasets: [{
                        label: "Number of Participants",
                        data: participantsCounts,
                        borderColor: "#ffa500",
                        backgroundColor: "#3e95cd",
                        fill: false,
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Number of Participants',
                            },
                        },
                    },
                },
            });
        };

        fetchEventData();
    }, []);

    return (
        <div className="w-full h-screen flex mx-auto my-auto">
            <div className='border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                <canvas id='myChart'></canvas>
            </div>
        </div>
    );
}

