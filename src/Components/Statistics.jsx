import React, { PureComponent, useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const [allDataForStatistics, setAllDataForStatistics] = useState([]);
    const [allDataLength, setAllDataLength] = useState();
    const [donatedDataLength, setDonatedDataLength] = useState();
    const [donationPercentage, setDonationPercentage] = useState();
    const [totalDonationPercentage, setTotalDonationPercentage] = useState();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(allDonationSectors => setAllDataForStatistics(allDonationSectors));
    }, []);

    useEffect(() => {
        const getAllDataLength = allDataForStatistics?.length;
        setAllDataLength(getAllDataLength);
        const getDonationsData = JSON.parse(localStorage.getItem("donations")) || [];
        setDonatedDataLength(getDonationsData);
    }, [allDataForStatistics]);

    useEffect(() => {
        // Calculate percentages here
        const getDonationPercentage = (donatedDataLength?.length / allDataLength) * 100 || 0;

        setDonationPercentage(getDonationPercentage);

        const getTotalDonationPercentage = 100 - getDonationPercentage;
        setTotalDonationPercentage(getTotalDonationPercentage);
    }, [donatedDataLength, allDataLength]);

    const data = [
        { name: "Total Donation", value: totalDonationPercentage },
        { name: "Your Donation", value: donationPercentage }
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className='text-2xl font-semibold' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};  



    return (
        <div>
            <PieChart width={1920} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className='flex gap-2 justify-center items-center'>
        <p className='text-lg'>Total Donation</p>
        <hr className='w-[100px] h-3 bg-[#FF444A] rounded mr-12' />
        <p className='text-lg'>Your Donation</p>
        <hr className='w-[100px] h-3 bg-[#00C49F] rounded' />
        </div>
        </div>
    );
};

export default Statistics;