"use server";
import Event from '@/database/event.model'
import connectDB from "../mongodb";

export const getEventBySlug = async (slug: string) => {
    try {
        await connectDB();
        const event = await Event.findOne({ slug: slug.trim().toLowerCase() }).lean();
        return event ? JSON.parse(JSON.stringify(event)) : null;
    } catch (error) {
        console.error("Error fetching event by slug:", error);
        return null;
    }
};

export const getSimilarEventBySlug = async (slug: string) => {
    try {
        await connectDB()
        const event = await Event.findOne({ slug })
        if (!event) return [];
        const similar = await Event.find({
            _id: { $ne: event._id },
            tags: { $in: event.tags }
        }).lean();
        return JSON.parse(JSON.stringify(similar));
    } catch (e) {
        return []
    }
}