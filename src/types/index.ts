export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: 'admin' | 'client'
  createdAt: Date
  lastLogin?: Date
  status: 'active' | 'inactive'
}

export interface Quote {
  id: string
  clientId: string
  clientName: string
  product: string
  amount: number
  status: 'pending' | 'approved' | 'rejected' | 'expired'
  createdAt: Date
  validUntil: Date
  intermediary?: string
}

export interface Policy {
  id: string
  clientId: string
  clientName: string
  product: string
  policyNumber: string
  premium: number
  downPayment: number
  installmentsPaid: number
  installmentsPending: number
  installmentsDue: number
  installmentsExpired: number
  status: 'active' | 'expired' | 'cancelled' | 'discontinued'
  startDate: Date
  endDate: Date
  intermediary?: string
}

export interface Document {
  id: string
  policyId: string
  name: string
  type: 'certificate' | 'schedule' | 'valuation' | 'confirmation' | 'other'
  url: string
  uploadedAt: Date
  sentToClient: boolean
}

export interface Valuation {
  id: string
  policyId: string
  clientName: string
  product: string
  status: 'pending' | 'completed'
  amount?: number
  reportUrl?: string
  createdAt: Date
  completedAt?: Date
}

export interface Payment {
  id: string
  policyId: string
  clientName: string
  amount: number
  method: 'mpesa' | 'bank' | 'cash'
  mpesaCode?: string
  status: 'pending' | 'validated' | 'failed'
  createdAt: Date
  validatedAt?: Date
}

export interface Commission {
  id: string
  intermediaryId: string
  intermediaryName: string
  policyId: string
  product: string
  amount: number
  status: 'pending' | 'paid'
  createdAt: Date
  paidAt?: Date
}

export interface Reminder {
  id: string
  type: 'payment' | 'renewal' | 'cancellation'
  product: string
  message: string
  emailTemplate: string
  smsTemplate: string
  isActive: boolean
  createdAt: Date
}

export interface Claim {
  id: string
  policyId: string
  clientName: string
  product: string
  amount: number
  status: 'submitted' | 'processing' | 'approved' | 'rejected' | 'paid'
  description: string
  submittedAt: Date
  processedAt?: Date
}

export interface DashboardStats {
  totalUsers: number
  totalPolicies: number
  totalClaims: number
  totalPremiums: number
  monthlyGrowth: number
  activeQuotes: number
  pendingPayments: number
  expiredPolicies: number
}