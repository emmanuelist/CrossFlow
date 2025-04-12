"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Search,
    HelpCircle,
    MessageCircle,
    FileText,
    Mail,
    Phone,
    Clock,
    Send,
    ArrowRight
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import DashboardLayout from '@/components/Dashboard2/DashboardLayout';

// FAQ items interface
interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

// FAQ Data
const faqData: FAQItem[] = [
    {
        question: "How do I add a new wallet?",
        answer: "To add a new wallet, go to the Wallets page and click the 'Add Wallet' button. You can then select the currency and provide a name for your new wallet.",
        category: "wallets"
    },
    {
        question: "What are the fees for international transfers?",
        answer: "Our fee structure for international transfers depends on the destination country and transfer amount. Typically, our fees range from 0.5% to 1.5% of the transfer amount with a minimum fee of $3. You can see the exact fee before confirming any transfer.",
        category: "transfers"
    },
    {
        question: "How long do international transfers take?",
        answer: "Most international transfers are completed within 1-3 business days. However, the exact time can vary depending on the destination country, banking systems involved, and verification requirements.",
        category: "transfers"
    },
    {
        question: "How do I change my password?",
        answer: "To change your password, go to Settings > Security, then enter your current password and your new password twice to confirm the change.",
        category: "account"
    },
    {
        question: "Can I have multiple currency wallets?",
        answer: "Yes, you can create multiple wallets for different currencies. This allows you to hold, send and receive money in various currencies without the need for conversion each time.",
        category: "wallets"
    },
    {
        question: "How do I enable two-factor authentication?",
        answer: "To enable two-factor authentication, go to Settings > Security > Two-Factor Authentication, and follow the instructions to set it up with your preferred method (authenticator app, SMS, or email).",
        category: "security"
    },
    {
        question: "What should I do if I don't recognize a transaction?",
        answer: "If you notice an unauthorized transaction, you should immediately contact our support team. You can also freeze your account from the Security settings to prevent further transactions.",
        category: "security"
    },
    {
        question: "Can I schedule recurring transfers?",
        answer: "Yes, when setting up a transfer, you can choose the 'Recurring' option and set the frequency (weekly, monthly, etc.) and duration for your recurring transfers.",
        category: "transfers"
    },
    {
        question: "How do I verify my identity?",
        answer: "To verify your identity, go to Settings > Profile > Verification. You'll need to provide a government-issued ID (passport, driver's license, etc.) and possibly a proof of address document.",
        category: "account"
    },
    {
        question: "What currencies do you support?",
        answer: "We currently support over 30 major currencies including USD, EUR, GBP, JPY, CAD, AUD, and many more. You can view the full list in the Currency Exchange section.",
        category: "wallets"
    }
];

// Knowledge Base Article interface
interface KBArticle {
    id: string;
    title: string;
    summary: string;
    category: string;
    readTime: number;
}

// Knowledge Base Data
const kbArticles: KBArticle[] = [
    {
        id: "kb-001",
        title: "Getting Started with FinanceApp",
        summary: "Learn how to set up your account, create wallets, and make your first transfer with our comprehensive guide for new users.",
        category: "getting-started",
        readTime: 5
    },
    {
        id: "kb-002",
        title: "Understanding Currency Exchange Rates",
        summary: "Everything you need to know about currency exchange rates, how they work, and how to get the best rates for your international transfers.",
        category: "transfers",
        readTime: 7
    },
    {
        id: "kb-003",
        title: "Security Best Practices",
        summary: "Tips and recommendations for keeping your account secure, including password management, two-factor authentication, and common security threats.",
        category: "security",
        readTime: 6
    },
    {
        id: "kb-004",
        title: "Managing Multiple Wallets",
        summary: "Strategies for effectively managing multiple currency wallets, automating transfers between wallets, and optimizing your finances.",
        category: "wallets",
        readTime: 4
    },
    {
        id: "kb-005",
        title: "International Transfer Guide",
        summary: "A comprehensive guide to international money transfers, including required information, processing times, compliance considerations, and troubleshooting tips.",
        category: "transfers",
        readTime: 8
    },
    {
        id: "kb-006",
        title: "Account Verification Process",
        summary: "Step-by-step instructions for completing the account verification process, including identity verification, address verification, and compliance requirements.",
        category: "account",
        readTime: 5
    }
];

// FAQ Tab Component
const FAQTab: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');

    // Filter FAQ items based on search and category
    const filteredFAQs = faqData.filter(faq => {
        const matchesSearch = searchQuery === '' ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = categoryFilter === 'all' || faq.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                        className="pl-10"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="md:w-[200px]">
                    <select
                        className="w-full h-10 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="account">Account</option>
                        <option value="wallets">Wallets</option>
                        <option value="transfers">Transfers</option>
                        <option value="security">Security</option>
                    </select>
                </div>
            </div>

            {/* FAQ Accordion */}
            {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                                <div className="flex items-start">
                                    <HelpCircle className="h-5 w-5 mr-2 flex-shrink-0 text-rose-500 dark:text-rose-400 mt-0.5" />
                                    <span>{faq.question}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-7 text-gray-700 dark:text-gray-300">
                                <p>{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            ) : (
                <div className="text-center py-10">
                    <HelpCircle className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No FAQs Found</h3>
                    <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
            )}

            {/* Still Need Help Card */}
            <Card className="mt-8 border-gray-200 dark:border-gray-800">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="bg-rose-100 dark:bg-rose-900/30 rounded-full p-4">
                            <MessageCircle className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Still have questions?</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-4">Can't find the answer you're looking for? Please contact our support team.</p>
                            <Button>Contact Support</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

// Knowledge Base Tab Component
const KnowledgeBaseTab: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [categoryFilter, setCategoryFilter] = useState<string>('all');

    // Filter articles based on search and category
    const filteredArticles = kbArticles.filter(article => {
        const matchesSearch = searchQuery === '' ||
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                        className="pl-10"
                        placeholder="Search knowledge base..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="md:w-[200px]">
                    <select
                        className="w-full h-10 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        <option value="all">All Categories</option>
                        <option value="getting-started">Getting Started</option>
                        <option value="account">Account</option>
                        <option value="wallets">Wallets</option>
                        <option value="transfers">Transfers</option>
                        <option value="security">Security</option>
                    </select>
                </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredArticles.map((article) => (
                        <Card key={article.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <Badge className="mb-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100">
                                    {article.category.split('-').map(word =>
                                        word.charAt(0).toUpperCase() + word.slice(1)
                                    ).join(' ')}
                                </Badge>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{article.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">{article.summary}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span>{article.readTime} min read</span>
                                    </div>
                                    <Button variant="outline" size="sm" className="flex items-center">
                                        Read Article
                                        <ArrowRight className="h-4 w-4 ml-1" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <FileText className="h-10 w-10 mx-auto mb-3 text-gray-400" />
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No Articles Found</h3>
                    <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter to find what you're looking for.</p>
                </div>
            )}
        </div>
    );
};

// Contact Us Tab Component
const ContactUsTab: React.FC = () => {
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Email Card */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="bg-rose-100 dark:bg-rose-900/30 rounded-full p-4 mb-4">
                            <Mail className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email Support</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">Get a response within 24 hours</p>
                        <p className="text-rose-600 dark:text-rose-400 font-medium">support@financeapp.com</p>
                    </CardContent>
                </Card>

                {/* Phone Card */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="bg-cyan-100 dark:bg-cyan-900/30 rounded-full p-4 mb-4">
                            <Phone className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone Support</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">Available Mon-Fri, 9am-6pm EST</p>
                        <p className="text-cyan-600 dark:text-cyan-400 font-medium">+1 (555) 123-4567</p>
                    </CardContent>
                </Card>

                {/* Live Chat Card */}
                <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="bg-amber-100 dark:bg-amber-900/30 rounded-full p-4 mb-4">
                            <MessageCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Live Chat</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">Chat with our support team in real-time</p>
                        <Button variant="outline">Start Chat</Button>
                    </CardContent>
                </Card>
            </div>

            {/* Contact Form */}
            <Card>
                <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <Input id="name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <Input id="email" type="email" placeholder="Your email address" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                        <Input
                            id="subject"
                            placeholder="What's your message about?"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <Textarea
                            id="message"
                            placeholder="How can we help you?"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="privacy"
                            className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-500 dark:border-gray-600 dark:bg-gray-800"
                        />
                        <label htmlFor="privacy" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                            I agree to the <a href="#" className="text-rose-600 dark:text-rose-400 hover:underline">privacy policy</a>
                        </label>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="flex items-center bg-gradient-to-r from-rose-500 to-cyan-500 hover:from-rose-600 hover:to-cyan-600">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

// Main Help & Support Page Component
const HelpSupportPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("faq");

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Help & Support
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Find answers, contact support, and get assistance
                        </p>
                    </div>
                </div>

                {/* Support Tabs */}
                <Card className="border-gray-200 dark:border-gray-800">
                    <CardContent className="p-6">
                        <Tabs defaultValue="faq" value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="mb-6">
                                <TabsTrigger value="faq">FAQ</TabsTrigger>
                                <TabsTrigger value="knowledge-base">Knowledge Base</TabsTrigger>
                                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                            </TabsList>

                            <TabsContent value="faq">
                                <FAQTab />
                            </TabsContent>
                            <TabsContent value="knowledge-base">
                                <KnowledgeBaseTab />
                            </TabsContent>
                            <TabsContent value="contact">
                                <ContactUsTab />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default HelpSupportPage;