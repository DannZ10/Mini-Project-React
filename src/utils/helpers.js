/**
 * Formats a numeric value into Indonesian Rupiah (IDR) currency format.
 * @param {number} value - The numeric value to format
 * @returns {string} The formatted Rupiah string (e.g., "Rp 150.000")
 */
export const formatRupiah = (value) => {
    if (value === 0) return 'Gratis';
    if (value === undefined || value === null) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(value);
};
