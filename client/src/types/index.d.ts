/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// ========================================

declare type AuthFormType = "sign-in" | "sign-up"

declare type Classification = {
  name: string
  items: string[]
}

declare type classificationProps = {
  classifications: Classification[]
}

declare type sideBarProps = React.ComponentProps<typeof Sidebar>

declare type SignUpParams = {
  firstName: string
  lastName: string
  email: string
  password: string
}

declare type LoginUser = {
  email: string
  password: string
}

declare type User = {
  $id: string
  email: string
  firstName: string
  lastName: string
  avatar: string
}

declare type Userprops = {
  user: User
}

declare type AuthContextType = {
  user: User | null
  token: string | null
  login: (token: string) => Promise<void>
  logout: () => void
}

declare type createHabit = {
  title: string
  description: string
  habitualTime: Date
  dueDate: Date
  priority: string
  category: string
  userId: string
}

declare type HabitsProps = {
  _id?: string
  title: string
  description?: string
  habitualTime?: string
  dueDate?: Date
  priority?: Priority
  category?: string
  completed?: boolean
  status?: string
  completedAt?: string
  wins?: number
  streak?: number
  longestStreak?: number
  lastActionDate?: Date
  relapseCount?: number
  lastRelapseAt?: string
  userId?: string
}

declare interface HabitsContextType {
  habits: HabitsProps[]
  loading: boolean
  addHabit: (habit: HabitsProps) => Promise<void>
  updateHabit: (id: string, data: HabitsProps) => Promise<void>
  removeHabit: (id: string) => Promise<void>
  updateHabitStatus: (id: string, status: "won" | "conceded") => Promise<void>
}

type Habit = {
  _id: string
  title: string
  completed: boolean
  streak: number
  category?: string
}

type Props = {
  habit: HabitsProps
  onToggle: (id: string, status: "won" | "conceded") => void
}

type UseHabit = {
  _id?: string
  title: string
  completed?: boolean
  streak?: number
  category?: string
  description?: string
  habitualTime?: string
  dueDate?: Date
  lastActionDate?: Date
  priority?: "low" | "medium" | "high"
  status?: "fighting" | "won" | "conceded"
  userId?: string
}

declare type HabitStatus = {
  $id: string
  status: string
}

declare type Priority = "low" | "medium" | "high"

declare type Category = "work" | "personal" | "health" | "addiction"

declare type Status = "fighting" | "won" | "relapsed"

declare type CategoryCount = {
  name: string
  count: number
  totalCount: number
}

declare type Receiver = {
  firstName: string
  lastName: string
}

declare type TransferParams = {
  sourceFundingSourceUrl: string
  destinationFundingSourceUrl: string
  amount: string
}

declare type AddFundingSourceParams = {
  dwollaCustomerId: string
  processorToken: string
  bankName: string
}

declare type NewDwollaCustomerParams = {
  firstName: string
  lastName: string
  email: string
  type: string
  address1: string
  city: string
  state: string
  postalCode: string
  dateOfBirth: string
  ssn: string
}

declare interface CreditCardProps {
  account: Account
  userName: string
  showBalance?: boolean
}

declare interface BankInfoProps {
  account: Account
  appwriteItemId?: string
  type: "full" | "card"
}

declare interface HeaderBoxProps {
  type?: "title" | "greeting"
  title: string
  subtext: string
  user?: string
}

declare interface MobileNavProps {
  user: User
}

declare interface PageHeaderProps {
  topTitle: string
  bottomTitle: string
  topDescription: string
  bottomDescription: string
  connectBank?: boolean
}

declare interface PaginationProps {
  page: number
  totalPages: number
}

declare interface AuthFormProps {
  type: "sign-in" | "sign-up"
}

declare interface FooterProps {
  user: User
}

declare interface RightSidebarProps {
  user: User
  habits: Habit[]
}

declare interface SiderbarProps {
  user: User
}

declare interface RecentTransactionsProps {
  habit: HabitsProps[]
  transactions: Transaction[]
  appwriteItemId: string
  page: number
}

declare interface TransactionHistoryTableProps {
  transactions: Transaction[]
  page: number
}

declare interface CategoryBadgeProps {
  category: string
}

declare interface TransactionTableProps {
  transactions: Transaction[]
}

declare interface CategoryProps {
  category: CategoryCount
}

declare interface DoughnutChartProps {
  habit: HabitsProps[]
}

// Actions
declare interface getAccountsProps {
  userId: string
}

declare interface getAccountProps {
  appwriteItemId: string
}

declare interface getInstitutionProps {
  institutionId: string
}

declare interface getTransactionsProps {
  accessToken: string
}

declare interface CreateFundingSourceOptions {
  customerId: string // Dwolla Customer ID
  fundingSourceName: string // Dwolla Funding Source Name
  plaidToken: string // Plaid Account Processor Token
  _links: object // Dwolla On Demand Authorization Link
}

declare interface CreateTransactionProps {
  name: string
  amount: string
  senderId: string
  senderBankId: string
  receiverId: string
  receiverBankId: string
  email: string
}

declare interface getTransactionsByBankIdProps {
  bankId: string
}

declare interface signInProps {
  email: string
  password: string
}

declare interface getUserInfoProps {
  userId: string
}

declare interface exchangePublicTokenProps {
  publicToken: string
  user: User
}

declare interface createBankAccountProps {
  accessToken: string
  userId: string
  accountId: string
  bankId: string
  fundingSourceUrl: string
  sharableId: string
}

declare interface getBanksProps {
  userId: string
}

declare interface getBankProps {
  documentId: string
}

declare interface getBankByAccountIdProps {
  accountId: string
}
