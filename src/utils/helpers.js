// Helper functions for common transformations
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

export const calculateRiskLevel = (score) => {
    if (score < 20) return 'Low';
    if (score < 50) return 'Medium';
    return 'High';
};
