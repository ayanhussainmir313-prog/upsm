import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Users,
  Bell,
  GraduationCap,
  LogOut,
  Search,
  Check,
  Clock,
  Phone,
  MapPin,
  Calendar,
  FileSpreadsheet
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Application {
  id: string;
  studentName: string;
  guardianName: string;
  applyingClass: string;
  phone: string;
  address: string;
  previousSchool: string;
  status: 'Pending Review' | 'Approved' | 'Interview Scheduled' | 'Enrolled';
  date: string;
}

interface Notice {
  id: string;
  title: string;
  category: string;
  date: string;
  pinned: boolean;
}

const INITIAL_APPLICATIONS: Application[] = [
  {
    id: 'APP-1001',
    studentName: 'Muhammad Ali Raza',
    guardianName: 'Hussain Mir',
    applyingClass: 'Class 9 (SSC-I)',
    phone: '0345-8912341',
    address: 'Minapin, Nagar',
    previousSchool: 'Govt Middle School Minapin',
    status: 'Approved',
    date: 'Sep 10, 2026',
  },
  {
    id: 'APP-1002',
    studentName: 'Syeda Fatima Zahra',
    guardianName: 'Syed Baqir Shah',
    applyingClass: 'Class 6',
    phone: '0355-4129844',
    address: 'Pisan, Nagar',
    previousSchool: 'Uswa Primary School',
    status: 'Pending Review',
    date: 'Sep 11, 2026',
  },
  {
    id: 'APP-1003',
    studentName: 'Abbas Kazim',
    guardianName: 'Muhammad Kazim',
    applyingClass: 'ECE 1',
    phone: '0342-9901823',
    address: 'Sikandarabad, Nagar',
    previousSchool: 'First Time Admission',
    status: 'Interview Scheduled',
    date: 'Sep 12, 2026',
  },
  {
    id: 'APP-1004',
    studentName: 'Zehra Batool',
    guardianName: 'Ghulam Mehdi',
    applyingClass: 'Class 1',
    phone: '0346-7788123',
    address: 'Minapin, Nagar',
    previousSchool: 'Early Childhood Center',
    status: 'Enrolled',
    date: 'Sep 13, 2026',
  },
];

const INITIAL_NOTICES: Notice[] = [
  {
    id: 'N-1',
    title: 'Admissions 2026 Merit Assessment & Interview Schedule Released',
    category: 'Admissions',
    date: 'Sep 12, 2026',
    pinned: true,
  },
  {
    id: 'N-2',
    title: 'FBISE SSC-I & SSC-II Registration Dossier Submission by Friday',
    category: 'FBISE Board',
    date: 'Sep 08, 2026',
    pinned: true,
  },
  {
    id: 'N-3',
    title: 'Monthly Parent-Teacher Academic Review Meeting (Minapin Campus Hall)',
    category: 'General',
    date: 'Sep 04, 2026',
    pinned: false,
  },
];

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'admissions' | 'notices' | 'academic'>('admissions');

  const [applications, setApplications] = useState<Application[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState('Admissions');

  // Load applications from localStorage combined with initial list
  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem('uswa_applications_list');
        if (stored) {
          const parsed = JSON.parse(stored);
          // Deduplicate by id
          const combined = [...parsed, ...INITIAL_APPLICATIONS.filter(init => !parsed.some((p: Application) => p.id === init.id))];
          setApplications(combined);
        } else {
          setApplications(INITIAL_APPLICATIONS);
        }
      } catch {
        setApplications(INITIAL_APPLICATIONS);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim().toLowerCase();
    const cleanPass = password.trim();

    // Valid institutional credentials
    const validUsers = ['admin', 'ues-mnp-01', 'admin@uswa.edu.pk', 'principal'];
    const validPasswords = ['uswa2026', 'admin123', 'admin', 'minapin2026'];

    if (validUsers.includes(cleanUser) && validPasswords.includes(cleanPass)) {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid username or password. Please verify your institutional credentials.');
    }
  };

  const handleUpdateStatus = (id: string, newStatus: Application['status']) => {
    const updated = applications.map((app) =>
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updated);
    try {
      localStorage.setItem('uswa_applications_list', JSON.stringify(updated));
    } catch {
      // LocalStorage fallback
    }
  };

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle.trim()) return;

    const notice: Notice = {
      id: 'N-' + Date.now().toString().slice(-4),
      title: newNoticeTitle.trim(),
      category: newNoticeCategory,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      pinned: false,
    };

    setNotices([notice, ...notices]);
    setNewNoticeTitle('');
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.guardianName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.applyingClass.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isAuthenticated ? 'max-w-5xl' : 'max-w-md'
        } bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#07132B] px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
                <span>Uswa Minapin Admin Portal</span>
                {isAuthenticated && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
                    ONLINE
                  </span>
                )}
              </h3>
              <p className="text-xs text-blue-200">
                {isAuthenticated
                  ? 'Administrator Dashboard • Session 2026'
                  : 'UES Institutional Staff & Administration Access'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors border border-slate-700"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Not Logged In: Authentication Screen */}
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="p-6 sm:p-7 space-y-5">
            {/* Confidentiality Notice */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
              <span>
                Authorized portal for Uswa Public School Minapin faculty and administrative staff. Please enter your institutional credentials to proceed.
              </span>
            </div>

            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-xl text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Staff / Admin Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Staff / Admin ID"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Sign In to Admin Dashboard</span>
            </button>
          </form>
        ) : (
          /* Logged In: Full Admin Dashboard */
          <div className="p-4 sm:p-6 space-y-6">
            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Total Students</span>
                <span className="text-2xl font-extrabold text-[#0A192F] font-heading mt-0.5 block">358</span>
                <span className="text-[11px] text-emerald-600 font-medium">Early Years to SSC</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">New Applications</span>
                <span className="text-2xl font-extrabold text-blue-700 font-heading mt-0.5 block">{applications.length}</span>
                <span className="text-[11px] text-blue-600 font-medium">Session 2026</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Academic Staff</span>
                <span className="text-2xl font-extrabold text-[#0A192F] font-heading mt-0.5 block">18</span>
                <span className="text-[11px] text-slate-600 font-medium">Qualified Teachers</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">FBISE Pass Rate</span>
                <span className="text-2xl font-extrabold text-emerald-700 font-heading mt-0.5 block">100%</span>
                <span className="text-[11px] text-emerald-600 font-medium">SSC Examinations</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button
                onClick={() => setActiveTab('admissions')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'admissions'
                    ? 'bg-[#1E40AF] text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Admissions Applications ({applications.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('notices')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'notices'
                    ? 'bg-[#1E40AF] text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>Campus Circulars ({notices.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('academic')}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'academic'
                    ? 'bg-[#1E40AF] text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Academic &amp; FBISE</span>
              </button>
            </div>

            {/* TAB 1: ADMISSIONS APPLICATION TABLE */}
            {activeTab === 'admissions' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search student, class, phone..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-semibold">Filter:</span>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Pending Review">Pending Review</option>
                      <option value="Approved">Approved</option>
                      <option value="Interview Scheduled">Interview Scheduled</option>
                      <option value="Enrolled">Enrolled</option>
                    </select>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase text-[11px] font-semibold tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Student &amp; Class</th>
                        <th className="py-3 px-4">Guardian &amp; Phone</th>
                        <th className="py-3 px-4">Location</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredApplications.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500 text-sm">
                            No applications matching filter criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredApplications.map((app) => (
                          <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-3 px-4">
                              <div className="font-bold text-[#0A192F]">{app.studentName}</div>
                              <span className="text-xs text-blue-700 font-semibold">{app.applyingClass}</span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-slate-800 font-medium">{app.guardianName}</div>
                              <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                                <Phone className="w-3 h-3 text-slate-400" />
                                <span>{app.phone}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-slate-600 text-xs">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-400" />
                                <span>{app.address}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-slate-500 text-xs whitespace-nowrap">
                              {app.date}
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                  app.status === 'Approved'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : app.status === 'Enrolled'
                                    ? 'bg-blue-100 text-blue-800'
                                    : app.status === 'Interview Scheduled'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {app.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right whitespace-nowrap">
                              <select
                                value={app.status}
                                onChange={(e) =>
                                  handleUpdateStatus(app.id, e.target.value as Application['status'])
                                }
                                className="text-xs px-2 py-1 rounded-md border border-slate-300 bg-white font-medium text-slate-700"
                              >
                                <option value="Pending Review">Pending</option>
                                <option value="Interview Scheduled">Interview</option>
                                <option value="Approved">Approve</option>
                                <option value="Enrolled">Enroll</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Note: Submitting an application via the website's "Apply for Admission" modal automatically records into this database.
                </p>
              </div>
            )}

            {/* TAB 2: NOTICES & CIRCULARS */}
            {activeTab === 'notices' && (
              <div className="space-y-5">
                <form onSubmit={handleAddNotice} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Enter new campus announcement or notice..."
                    value={newNoticeTitle}
                    onChange={(e) => setNewNoticeTitle(e.target.value)}
                    className="flex-1 px-3.5 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                  />
                  <select
                    value={newNoticeCategory}
                    onChange={(e) => setNewNoticeCategory(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                  >
                    <option value="Admissions">Admissions</option>
                    <option value="FBISE Board">FBISE Board</option>
                    <option value="General">General Notice</option>
                    <option value="Sports">Sports / Events</option>
                  </select>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1E40AF] hover:bg-[#1D4ED8] text-white rounded-lg text-xs sm:text-sm font-semibold cursor-pointer shrink-0"
                  >
                    Post Circular
                  </button>
                </form>

                <div className="space-y-2.5">
                  {notices.map((notice) => (
                    <div
                      key={notice.id}
                      className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Bell className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#0A192F]">
                            {notice.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold">
                              {notice.category}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {notice.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      {notice.pinned && (
                        <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          Pinned
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: ACADEMIC & FBISE OVERVIEW */}
            {activeTab === 'academic' && (
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <h4 className="font-heading font-bold text-sm text-[#0A192F] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-blue-700" />
                    <span>Federal Board (FBISE) Examination Status (SSC-I &amp; SSC-II)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Uswa Public School Minapin maintains 100% passing results in FBISE examinations. The campus prepares students through standardized tests, science lab practicals, and pre-board examinations aligned with federal standards.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 uppercase font-semibold">Highest SSC Marks</span>
                      <span className="text-lg font-bold text-[#0A192F] block">1032 / 1100 (93.8%)</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 uppercase font-semibold">A+ &amp; A Grade Ratio</span>
                      <span className="text-lg font-bold text-emerald-700 block">84% of Candidates</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 uppercase font-semibold">Board Affiliation Code</span>
                      <span className="text-lg font-bold text-blue-700 font-mono block">FBISE-UES-MNP</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 text-xs text-blue-900 space-y-1.5">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>UES Gilgit-Baltistan Central Academic Coordination</span>
                  </div>
                  <p>
                    All examinations and teacher training sessions are monitored by the Friends' Educational &amp; Medical Trust (FEMT) and Uswa Education System Central Directorate in Gilgit.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
