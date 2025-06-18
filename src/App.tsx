import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Header } from './components/Header'
import { DashboardStats } from './components/DashboardStats'
import { UsersManagement } from './components/UsersManagement'
import { QuotesManagement } from './components/QuotesManagement'
import { PoliciesManagement } from './components/PoliciesManagement'
import { PaymentsManagement } from './components/PaymentsManagement'
import { ClaimsManagement } from './components/ClaimsManagement'
import { ReportsAnalysis } from './components/ReportsAnalysis'
import { 
  mockUsers, 
  mockQuotes, 
  mockPolicies, 
  mockDocuments, 
  mockValuations, 
  mockPayments, 
  mockCommissions, 
  mockReminders, 
  mockClaims, 
  mockDashboardStats 
} from './data/mockData'

function App() {
  const [currentUser] = useState({
    name: 'Admin User',
    email: 'admin@cicinsurance.com',
    role: 'admin'
  })

  const handleLogout = () => {
    console.log('Logging out...')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">EasyBima Admin Dashboard</h1>
          <p className="text-gray-600">Comprehensive insurance management system</p>
        </div>

        <DashboardStats stats={mockDashboardStats} />

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 bg-white border border-gray-200 p-1 rounded-lg">
            <TabsTrigger value="users" className="text-xs lg:text-sm">Users/Clients</TabsTrigger>
            <TabsTrigger value="quotes" className="text-xs lg:text-sm">Quotes</TabsTrigger>
            <TabsTrigger value="policies" className="text-xs lg:text-sm">Policies</TabsTrigger>
            <TabsTrigger value="documents" className="text-xs lg:text-sm">Documents</TabsTrigger>
            <TabsTrigger value="valuations" className="text-xs lg:text-sm">Valuations</TabsTrigger>
            <TabsTrigger value="payments" className="text-xs lg:text-sm">Payments</TabsTrigger>
            <TabsTrigger value="commissions" className="text-xs lg:text-sm">Commissions</TabsTrigger>
            <TabsTrigger value="reminders" className="text-xs lg:text-sm">Reminders</TabsTrigger>
            <TabsTrigger value="claims" className="text-xs lg:text-sm">Claims</TabsTrigger>
            <TabsTrigger value="reports" className="text-xs lg:text-sm">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <UsersManagement users={mockUsers} />
          </TabsContent>

          <TabsContent value="quotes">
            <QuotesManagement quotes={mockQuotes} />
          </TabsContent>

          <TabsContent value="policies">
            <PoliciesManagement policies={mockPolicies} />
          </TabsContent>

          <TabsContent value="documents">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">Document Management</h3>
              <p className="text-gray-600">Document management features coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="valuations">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">Valuation Management</h3>
              <p className="text-gray-600">Valuation management features coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="payments">
            <PaymentsManagement payments={mockPayments} />
          </TabsContent>

          <TabsContent value="commissions">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">Commission Management</h3>
              <p className="text-gray-600">Commission management features coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="reminders">
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">Automatic Reminders</h3>
              <p className="text-gray-600">Reminder management features coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="claims">
            <ClaimsManagement claims={mockClaims} />
          </TabsContent>

          <TabsContent value="reports">
            <ReportsAnalysis />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App