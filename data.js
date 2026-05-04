window.APP_DATA = {
    categories: [
        { name: 'Học tập', color: 'text-pink-700', bg: 'bg-pink-100', dot: 'bg-pink-500' },
        { name: 'Deadline', color: 'text-rose-700', bg: 'bg-rose-100', dot: 'bg-rose-500' },
        { name: 'Công việc', color: 'text-fuchsia-700', bg: 'bg-fuchsia-100', dot: 'bg-fuchsia-500' },
        { name: 'Self-care', color: 'text-violet-700', bg: 'bg-violet-100', dot: 'bg-violet-500' },
        { name: 'Ý tưởng cute', color: 'text-amber-700', bg: 'bg-amber-100', dot: 'bg-amber-400' }
    ],
    topics: [
        {
            title: 'IELTS Garden',
            desc: 'Khu vườn luyện tiếng Anh nhỏ xinh',
            color: 'from-pink-400 to-rose-400',
            subSections: [
                { title: 'General', icon: 'Sparkles', links: [{ name: 'Study Plan', url: '#' }, { name: 'Vocabulary List', url: '#' }] },
                { title: 'Speaking', icon: 'Mic', links: [{ name: 'Speaking Practice', url: '#' }, { name: 'Cue Card Bank', url: '#' }] },
                { title: 'Listening', icon: 'Headphones', links: [{ name: 'Listening Practice', url: '#' }, { name: 'Dictation Notes', url: '#' }] },
                { title: 'Reading', icon: 'BookOpen', links: [{ name: 'Reading Practice', url: '#' }, { name: 'Keyword Table', url: '#' }] },
                { title: 'Writing', icon: 'PenTool', links: [{ name: 'Task 1 Templates', url: '#' }, { name: 'Task 2 Ideas', url: '#' }] }
            ]
        },
        {
            title: 'University Corner',
            desc: 'Môn học trên lớp và tài liệu cần lưu',
            color: 'from-violet-400 to-fuchsia-400',
            isUniContainer: true,
            subjects: ['Kế toán', 'Excel', 'Marketing', 'Business Analysis']
        },
        {
            title: 'Content & Design',
            desc: 'Ý tưởng bài đăng, hình ảnh, portfolio',
            color: 'from-fuchsia-400 to-pink-400',
            links: [
                { name: 'Content Calendar', url: '#' },
                { name: 'Design Inspiration', url: '#' },
                { name: 'Caption Bank', url: '#' }
            ]
        },
        {
            title: 'BA & Data Notes',
            desc: 'Tài liệu phân tích nghiệp vụ và dữ liệu',
            color: 'from-indigo-400 to-violet-400',
            links: [
                { name: 'User Story Template', url: '#' },
                { name: 'Acceptance Criteria Notes', url: '#' },
                { name: 'Dashboard References', url: '#' }
            ]
        },
        {
            title: 'Little Dream Box',
            desc: 'Mục tiêu cá nhân, bucket list và điều muốn thử',
            color: 'from-amber-300 to-pink-400',
            isDreamBox: true
        }
    ]
};
