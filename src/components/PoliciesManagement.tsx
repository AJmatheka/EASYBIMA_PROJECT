import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Search, Filter, Download, Eye, Edit } from 'lucide-react'
import { Policy } from '../types'
import { formatDate, formatCurrency } from '../lib/utils'

interface PoliciesManagementProps {
  policies: Policy[]
}

export function PoliciesManagement({ policies }: PoliciesManagementProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'expired' | 'cancelled' | 'discontinued'>('all')

  const filteredPolicies = policies.filter(policy => {
    const matchesSearch = policy.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         policy.policyNumber.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || policy.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusVariant = (status: Policy['status']) => {
    switch (status) {
      case 'active': return 'success'
      case 'expired': return 'warning'
      case 'cancelled': return 'destructive'
      case 'discontinued': return 'secondary'
      default: return 'default'
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Policy Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search policies by client, product, or policy number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('all')}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={filterStatus === 'active' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('active')}
                size="sm"
              >
                Active
              </Button>
              <Button
                variant={filterStatus === 'expired' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('expired')}
                size="sm"
              >
                Expired
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Policy Number</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Premium</TableHead>
                  <TableHead>Down Payment</TableHead>
                  <TableHead>Installments</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPolicies.map((policy) => (
                  <TableRow key={policy.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{policy.policyNumber}</TableCell>
                    <TableCell>{policy.clientName}</TableCell>
                    <TableCell>{policy.product}</TableCell>
                    <TableCell>{formatCurrency(policy.premium)}</TableCell>
                    <TableCell>{formatCurrency(policy.downPayment)}</TableCell>
                    <TableCell>
                      <div className="text-xs">
                        <div className="text-green-600">Paid: {policy.installmentsPaid}</div>
                        <div className="text-yellow-600">Pending: {policy.installmentsPending}</div>
                        <div className="text-red-600">Due: {policy.installmentsDue}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(policy.status)}>
                        {policy.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatDate(policy.startDate)}</TableCell>
                    <TableCell>{formatDate(policy.endDate)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredPolicies.length} of {policies.length} policies
          </div>
        </CardContent>
      </Card>
    </div>
  )
}