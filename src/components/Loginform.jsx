

function AdminPanel() {
    <div>
        <h3>some content</h3>
    </div>
}

export default function LoginForm() {
    let content;
    let isLoggedIn = prompt('Please log in');
    if (isLoggedIn) {
        content = <AdminPanel />;
    }
    return (
        <div>
            {content}
        </div>
    );
    };
