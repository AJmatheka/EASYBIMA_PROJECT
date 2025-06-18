import { User, Quote, Policy, Document, Valuation, Payment, Commission, Reminder, Claim, DashboardStats } from '../types'

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+254712345678',
    role: 'client',
    createdAt: new Date('2024-01-15'),
    lastLogin: new Date('2024-06-15'),
    status: 'active'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+254798765432',
    role: 'client',
    createdAt: new Date('2024-02-20'),
    lastLogin: new Date('2024-06-14'),
    status: 'active'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@cicinsurance.com',
    phone: '+254700111222',
    role: 'admin',
    createdAt: new Date('2023-12-01'),
    lastLogin: new Date('2024-06-18'),
    status: 'active'
  }
]

export const mockQuotes: Quote[] = [
  {
    id: 'Q001',
    clientId: '1',
    clientName: 'John Doe',
    product: 'Motor Insurance',
    amount: 45000,
    status: 'pending',
    createdAt: new Date('2024-06-10'),
    validUntil: new Date('2024-07-10'),
    intermediary: 'ABC Brokers'
  },
  {
    id: 'Q002',
    clientId: '2',
    clientName: 'Jane Smith',
    product: 'Home Insurance',
    amount: 25000,
    status: 'approved',
    createdAt: new Date('2024-06-08'),
    validUntil: new Date('2024-07-08')
  }
]

export const mockPolicies: Policy[] = [
  {
    id: 'P001',
    clientId: '1',
    clientName: 'John Doe',
    product: 'Motor Insurance',
    policyNumber: 'CIC/MOT/2024/001',
    premium: 45000,
    downPayment: 15000,
    installmentsPaid: 2,
    installmentsPending: 1,
    installmentsDue: 0,
    installmentsExpired: 0,
    status: 'active',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    intermediary: 'ABC Brokers'
  },
  {
    id: 'P002',
    clientId: '2',
    clientName: 'Jane Smith',
    product: 'Home Insurance',
    policyNumber: 'CIC/HOME/2024/002',
    premium: 25000,
    downPayment: 25000,
    installmentsPaid: 1,
    installmentsPending: 0,
    installmentsDue: 0,
    installmentsExpired: 0,
    status: 'active',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2025-02-28')
  }
]

export const mockDocuments: Document[] = [
  {
    id: 'D001',
    policyId: 'P001',
    name: 'Motor Insurance Certificate',
    type: 'certificate',
    url: '/documents/cert_001.pdf',
    uploadedAt: new Date('2024-01-05'),
    sentToClient: true
  },
  {
    id: 'D002',
    policyId: 'P001',
    name: 'Policy Schedule',
    type: 'schedule',
    url: '/documents/schedule_001.pdf',
    uploadedAt: new Date('2024-01-05'),
    sentToClient: true
  }
]

export const mockValuations: Valuation[] = [
  {
    id: 'V001',
    policyId: 'P001',
    clientName: 'John Doe',
    product: 'Motor Insurance',
    status: 'completed',
    amount: 1200000,
    reportUrl: '/valuations/report_001.pdf',
    createdAt: new Date('2024-01-02'),
    completedAt: new Date('2024-01-03')
  },
  {
    id: 'V002',
    policyId: 'P002',
    clientName: 'Jane Smith',
    product: 'Home Insurance',
    status: 'pending',
    createdAt: new Date('2024-03-02')
  }
]

export const mockPayments: Payment[] = [
  {
    id: 'PAY001',
    policyId: 'P001',
    clientName: 'John Doe',
    amount: 15000,
    method: 'mpesa',
    mpesaCode: 'QA12B3C4D5',
    status: 'validated',
    createdAt: new Date('2024-01-01'),
    validatedAt: new Date('2024-01-01')
  },
  {
    id: 'PAY002',
    policyId: 'P001',
    clientName: 'John Doe',
    amount: 15000,
    method: 'mpesa',
    mpesaCode: 'QB34C5D6E7',
    status: 'pending',
    createdAt: new Date('2024-04-01')
  }
]

export const mockCommissions: Commission[] = [
  {
    id: 'COM001',
    intermediaryId: 'INT001',
    intermediaryName: 'ABC Brokers',
    policyId: 'P001',
    product: 'Motor Insurance',
    amount: 4500,
    status: 'paid',
    createdAt: new Date('2024-01-15'),
    paidAt: new Date('2024-01-20')
  },
  {
    id: 'COM002',
    intermediaryId: 'INT002',
    intermediaryName: 'XYZ Insurance Agents',
    policyId: 'P003',
    product: 'Life Insurance',
    amount: 7500,
    status: 'pending',
    createdAt: new Date('2024-06-01')
  }
]

export const mockReminders: Reminder[] = [
  {
    id: 'REM001',
    type: 'payment',
    product: 'Motor Insurance',
    message: 'Payment reminder for your motor insurance policy',
    emailTemplate: 'Dear {name}, your payment of {amount} is due on {date}.',
    smsTemplate: 'CIC Insurance: Payment of KES {amount} due on {date}. Pay via Paybill 123456.',
    isActive: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: 'REM002',
    type: 'renewal',
    product: 'Home Insurance',
    message: 'Policy renewal reminder',
    emailTemplate: 'Dear {name}, your policy expires on {date}. Renew now to avoid coverage gaps.',
    smsTemplate: 'CIC Insurance: Policy expires on {date}. Renew now.',
    isActive: true,
    createdAt: new Date('2024-01-01')
  }
]

export const mockClaims: Claim[] = [
  {
    id: 'CL001',
    policyId: 'P001',
    clientName: 'John Doe',
    product: 'Motor Insurance',
    amount: 150000,
    status: 'processing',
    description: 'Vehicle accident damage claim',
    submittedAt: new Date('2024-06-01')
  },
  {
    id: 'CL002',
    policyId: 'P002',
    clientName: 'Jane Smith',
    product: 'Home Insurance',
    amount: 75000,
    status: 'approved',
    description: 'Water damage to property',
    submittedAt: new Date('2024-05-15'),
    processedAt: new Date('2024-06-10')
  }
]

export const mockDashboardStats: DashboardStats = {
  totalUsers: 1247,
  totalPolicies: 892,
  totalClaims: 45,
  totalPremiums: 12500000,
  monthlyGrowth: 8.5,
  activeQuotes: 23,
  pendingPayments: 156,
  expiredPolicies: 12
}