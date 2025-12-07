(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateBeneficiaryForm)
});
'use client';
function CreateBeneficiaryForm({ mode, initialData, onSuccess, onCancel }) {
    // ... all useState/useEffect logic as before ...
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            // --- 1. Create Beneficiary via API ---
            const formData = new FormData();
            formData.append('firstName', form.firstName.trim());
            formData.append('lastName', form.lastName.trim());
            formData.append('gender', form.gender);
            formData.append('dateOfBirth', form.dateOfBirth);
            if (form.email) formData.append('email', form.email.trim());
            if (form.phone) formData.append('phone', form.phone.trim());
            if (form.institutionId) formData.append('institutionId', form.institutionId);
            formData.append('beneficiaryStatus', form.beneficiaryStatus);
            // Profile images
            imageFiles.forEach((file)=>{
                formData.append('images', file);
            });
            let res;
            let beneficiary;
            if (mode === 'edit' && initialData?.id) {
                // PATCH, not supported in this refactor (see note below)
                res = await fetch(`/api/beneficiaries/${initialData.id}`, {
                    method: 'PATCH',
                    body: formData
                });
                beneficiary = await res.json();
            } else {
                // POST new
                res = await fetch('/api/beneficiaries', {
                    method: 'POST',
                    body: formData
                });
                if (!res.ok) {
                    const errorData = await res.json().catch(()=>null);
                    throw new Error(errorData?.error || (mode === 'edit' ? 'Failed to update beneficiary' : 'Failed to create beneficiary'));
                }
                beneficiary = await res.json();
            }
            // --- 2. POST Requests to /api/beneficiaryRequests ---
            for (const req of requests){
                await fetch('/api/beneficiaryRequests', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        beneficiaryId: beneficiary.id,
                        title: req.title,
                        beneficiaryRequestText: req.beneficiaryRequestText,
                        status: req.status || 'draft'
                    })
                });
            }
            // --- 3. POST Messages to /api/beneficiaryMessages ---
            for (const msg of messages){
                await fetch('/api/beneficiaryMessages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        beneficiaryId: beneficiary.id,
                        title: msg.title,
                        beneficiaryMessageText: msg.message,
                        status: msg.status || 'draft'
                    })
                });
            }
            if (onSuccess) {
                onSuccess();
            } else {
                router.refresh();
                router.push('/admin');
            }
        } catch (err) {
            console.error('Error saving beneficiary:', err);
            alert(`There was an error ${mode === 'edit' ? 'updating' : 'creating'} the beneficiary. Please try again.`);
        } finally{
            setLoading(false);
        }
    };
// ...the rest of the form code is unchanged...
}
_c = CreateBeneficiaryForm;
var _c;
__turbopack_context__.k.register(_c, "CreateBeneficiaryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(admin)/admin/dashboard/createBeneficiaryForm.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=app_%28admin%29_admin_dashboard_createBeneficiaryForm_tsx_7e67baf6._.js.map