import React, { useState, useEffect } from 'react';

const SITE = 'al-wafi.sch.id';
const PATH = '/';
const API_BASE = 'https://page-views-api.ratneshc.com/api/v1';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE}/track?site=${SITE}&path=${PATH}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        if (data?.views != null) setCount(data.views);
      })
      .catch(() => {});
  }, []);

  if (count == null) return null;

  return (
    <span className="text-gray-500 text-[11px] font-light tracking-wide">
      <i className="fas fa-eye me-1.5 text-[#29A6B6]"></i>
      {count.toLocaleString()} visitors
    </span>
  );
};

export default VisitorCounter;
