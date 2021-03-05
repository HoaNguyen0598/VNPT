import React from 'react';

const Token = () => {
    return (
        <div className="rc_token">
            <div className="col-12">
                <h2 className="rc_token-title">Thông tin Token</h2>
                <div className="rc_token-id">
                    <h3 className="rc_token-h3">Token id</h3>
                    <div className="rc_token-content">
                        <span className="rc_token-text">b1b3d63a-1ac1-8362-e053-5f4fc10aabc6</span>
                        <img src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/Copy.png"></img>
                    </div>
                </div>
                <div className="rc_token-key">
                    <h3 className="rc_token-h3">Token key</h3>
                    <div className="rc_token-content">
                        <span className="rc_token-text">MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJ4fk5hvxkXWIPrVLr298k7X2pD2YF1ne54eqZGJNXNVEnrJdVDznyexLA+zrFo8CqPsL8xk701IMcIyxdjvU7cCAwEAAQ==</span>
                        <div className="" style={{ display: 'flex' }}>
                            <img src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/Copy.png"></img>
                            <img src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/refresh.png"></img>
                        </div>
                    </div>
                </div>
                <div className="rc_token-access">
                    <h3 className="rc_token-h3">Access token</h3>
                    <p className="rc_token-text">bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsicmVzdHNlcnZpY2UiXSwidXNlcl9uYW1lIjoieHVhbnRoaW5oMjQwNUBnbWFpbC5jb20iLCJzY29wZSI6WyJyZWFkIl0sInV1aWRfYWNjb3VudCI6IjkwZmU3NjVjLTkzY2QtNGFlNC1hMjlhLTM1NDY5MmMyMWY0YSIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwianRpIjoiMDVmY2I4MTMtNzkxYi00MDNmLWFmZjEtOTQ1ZTI1YTlhY2EyIiwiY2xpZW50X2lkIjoiYWRtaW5hcHAifQ.p43n7XiDzGiABPAyxu_jCXY6qwExOT3nqAu3td0oHHHbz3yZTl-SPrHJaLVy-NSTzlyIs1S4IMgKmZdUs5LB8nPl4KmC8g2spazzuKU23nS7e6k8x2fbnPNubq9j7YFlVgxHySmeK4gVZQZOoKc4V7ZDkr7S8RJSb12t_nY7-euL1XHKTHW0S5Khz5-XpNNaH5rsvVlLuR5ocVMj6LsuY58Qk93e3M0zEW5u0dDn9O6XVbrCjlY16-96QNi3WjDYU48h5tQ7Ku3rKaayx0ieffbsNqBtfbdOvod07epFqB0STbEaeND9Cd01fb__tE31X1-dxgMMKOFXQAulgxmwyw</p>
                    <div style={{ float: 'right' }}>
                        <img src="https://ekyc.vnpt.vn/admin-dashboard/assets/img/Copy.png" />
                        Sao chép
                    </div>
                </div>
                <div className="rc_token-note">
                    <span>** Token id, Token Key và Access token dùng để bảo mật khi thực hiện gọi api. Tham khảo hướng dẫn <a className="rc_token-note--link" href="#">Tại đây</a>.
                        Vui lòng không chia sẻ các keys trên vì an toàn thông tin Dự án của bạn. **</span>
                </div>
            </div>
        </div>
    )
};

export default Token;
