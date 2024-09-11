"use client";
import { useEffect, useState } from "react";

import { adminAPIs } from "@/services/admin/adminAPIs";
export default function useAdminStorge() {
  const [UserVisitors, setUserVisitors] = useState<Users>();
  const [ReviewCount, setviewCount] = useState<Users>();
  const [KeywordCount, setKeywordCount] = useState<Users>();
  useEffect(() => {
    const fetchVisitors = async () => {
      const response = await adminAPIs.UserCount();
      setUserVisitors(response);
    };
    const fetchReviews = async () => {
      const response = await adminAPIs.ReviewCount();
      setviewCount(response);
    };
    const fetchKeywords = async () => {
      const response = await adminAPIs.KeywordwCount();
      setKeywordCount(response);
    };

    fetchVisitors();
    fetchReviews();
    fetchKeywords();
  }, []);
  return { UserVisitors, ReviewCount, KeywordCount };
}
